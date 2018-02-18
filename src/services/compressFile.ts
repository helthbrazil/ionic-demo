import { Injectable } from '@angular/core';
import JSZip from 'jszip';

@Injectable()
export class CompressFile {
    public zip: JSZip;
    constructor() {
        var zip = JSZip();
    }
}