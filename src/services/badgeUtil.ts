import { Injectable } from '@angular/core';
import { Badge } from '@ionic-native/badge';

@Injectable()
export class BadgeUtil {

    constructor(private badge: Badge) { }

    hasPermission() {
        this.badge.hasPermission().then(() => {
            console.log("Badge Permitido");
        }).catch(() => {
            this.registerPermission();
        }
            );
    }

    private registerPermission() {
        this.badge.registerPermission().then(() => {
            console.log("Permissão concedida");
        }).catch(() => {
            console.log("Permissão negada");
        });
    }

    public setBadge(badge: number) {
        this.badge.set(badge);
    }

    public increase(increaseBy: number) {
        this.badge.increase(increaseBy);
    }
}