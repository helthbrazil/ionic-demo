import { BluetoothLocalStorageUtil } from './../localStorage/bluetoothDevice';
import { Toast } from './../componentesIonic/toast';
import { Events } from 'ionic-angular';
import { BluetoothObject } from './../entity/bluetoothObject';
import { Alertas } from './../componentesIonic/alertas';
import { Injectable } from '@angular/core';
import { BLE } from '@ionic-native/ble';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';


import 'rxjs/add/operator/map';
@Injectable()
export class BLEUtil {
    public static VERIFY_CONNECTION: boolean = false;
    public static readonly EVENTO_LEITURA: string = "lerTag";
    public static readonly EVENTO_DESCONECTAR: string = "bluetoothClosedConnection";

    private static bluetoothSerial: BluetoothSerial;
    constructor(public events: Events, public toast: Toast, public bluetoothLocalStorageUtil: BluetoothLocalStorageUtil) {
        this.events.subscribe(BLEUtil.EVENTO_DESCONECTAR, () => {
            this.closeConnection();
        });
    }

    public static getInstance(): BluetoothSerial {
        if (this.bluetoothSerial != null || this.bluetoothSerial != undefined) {
            return this.bluetoothSerial;
        } else {
            this.bluetoothSerial = new BluetoothSerial();
            return this.bluetoothSerial;
        }
    }

    conectToDevice(device: BluetoothObject, callbackConect) {
        let ble = BLEUtil.getInstance();
        ble.connect(device.$address).subscribe(response => {
            this.bluetoothLocalStorageUtil.save(device);
            console.log("Conectado");
            callbackConect("Conectado");
            ble.subscribeRawData().subscribe(response => {
                let tag: string = this.dataToString(response);
                if (tag.length == 15) {
                    console.log("TAG lida pelo bastão");
                    this.events.publish(BLEUtil.EVENTO_LEITURA, tag);
                    console.log("Evento de leitura disparado");
                } else {
                    this.toast.showToast("Erro ao identificar TAG. Tente novamente", Toast.BOTTOM, 4000);
                }
            });
        });
    }

    isConnected(callbackSucess, callbackError) {
        let ble = BLEUtil.getInstance();
        ble.isConnected().then(response => {
            callbackSucess({
                status: 200,
                response: response
            });
        }).catch(error => {
            callbackError({
                status: 500,
                response: error
            });
        });
    }

    dataToString(data: ArrayBuffer): string {
        let string = "";
        let valores = new Uint8Array(data);
        // Remove the 2 last caracters of string
        let lengthOfValores = valores.length - 2;
        for (let i = 0; i < lengthOfValores; i++) {
            string += String.fromCharCode(valores[i]);
        }
        // alertar tag
        return string;
    }

    showBluetoothSettings() {
        let ble = BLEUtil.getInstance();
        ble.showBluetoothSettings().then(response => {
            console.log(response);
        }).catch(error => {
            console.error(error);
        });
    }

    enable() {
        let ble = BLEUtil.getInstance();
        ble.enable().then(response => {
            console.log('Bluetooth habilitado');
        }).catch(error => {
            console.error(error);
        });
    } 

    enableWithConfirmation(callbackSucess, callbackError) {
        let ble = BLEUtil.getInstance();
        ble.enable().then(response => {
            callbackSucess(response);
        }).catch(error => {
            callbackError(error);
        });
    }

    closeConnection() {
        BLEUtil.getInstance().disconnect();
        //    this.toast.showToast("Bluetooth desconectado", Toast.BOTTOM, 4000);
    }

    isEnabled(callbackSucess, callbackError) {
        let ble = BLEUtil.getInstance();
        ble.isEnabled().then(response => {
            callbackSucess(response);
        }).catch(error => {
            callbackError(error);
        });
    }

    scanBluetooth(callback) {
        let devices = new Array<any>();
        let bluetooth = BLEUtil.getInstance();
        bluetooth.enable();
        bluetooth.list().then(response => {
            let devices = new Array<BluetoothObject>();
            console.log(response);
            for (let i = 0; i < response.length; i++) {
                if (response[i].class == 0) {
                    let dados = response[i];
                    let bluetoothObject = new BluetoothObject();
                    bluetoothObject.$address = dados.address;
                    bluetoothObject.$class = dados.class;
                    bluetoothObject.$id = dados.id;
                    bluetoothObject.$name = dados.name;

                    devices.push(bluetoothObject);
                }
            }
            callback({
                status: 200,
                response: devices
            });
        }).catch(error => {
            console.error(error);
            callback({
                status: 500,
                response: error
            });
        });
    }
}