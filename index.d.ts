import { NativeEventEmitter, Platform } from "react-native";
export interface PrinterOptions {
  beep?: boolean;
  cut?: boolean;
  tailingLine?: boolean;
  encoding?: string;
}
export interface IUSBPrinter {
  device_name: string;
  vendor_id: string;
  product_id: string;
}
export interface IBLEPrinter {
  device_name: string;
  inner_mac_address: string;
}
export interface INetPrinter {
  device_name: string;
  host: string;
  port: number;
}
export declare enum PrinterWidth {
  "58mm" = 58,
  "80mm" = 80,
}
export interface PrinterImageOptions {
  beep?: boolean;
  cut?: boolean;
  tailingLine?: boolean;
  encoding?: string;
  imageWidth?: number;
  imageHeight?: number;
  printerWidthType?: PrinterWidth;
  paddingX?: number;
}
export declare const USBPrinter: {
  init: () => Promise<void>;
  getDeviceList: () => Promise<IUSBPrinter[]>;
  connectPrinter: (vendorId: string, productId: string) => Promise<IUSBPrinter>;
  closeConn: () => Promise<void>;
  printText: (text: string, opts?: PrinterOptions) => void;
  printBill: (text: string, opts?: PrinterOptions) => void;
  printImage: (imgUrl: string, opts?: {}) => void;
  printQrCode: (qrCode: string, opts?: {}) => void;
  printImageBase64: (
    Base64: string,
    isImin: number,
    opts?: PrinterImageOptions
  ) => void;
};
export declare const BLEPrinter: {
  init: () => Promise<void>;
  getDeviceList: () => Promise<IBLEPrinter[]>;
  connectPrinter: (inner_mac_address: string) => Promise<IBLEPrinter>;
  closeConn: () => Promise<void>;
  printText: (text: string, opts?: PrinterOptions) => void;
  printBill: (text: string, opts?: PrinterOptions) => void;
  printImage: (imgUrl: string, opts?: {}) => void;
  printQrCode: (qrCode: string, opts?: {}) => void;
  printPDF: (filePath: string, opts?: {}) => void;
  printImageBase64: (
    Base64: string,
    isImin: number,
    opts?: PrinterImageOptions
  ) => void;
};
export declare const NetPrinter: {
  init: () => Promise<void>;
  getDeviceList: () => Promise<INetPrinter[]>;
  connectPrinter: (host: string, port: number) => Promise<INetPrinter>;
  closeConn: () => Promise<void>;
  printText: (text: string, opts?: {}) => void;
  printBill: (text: string, opts?: {}) => void;
  printImage: (imgUrl: string, opts?: {}) => void;
  printQrCode: (qrCode: string, opts?: {}) => void;
  printPDF: (filePath: string, opts?: {}) => void;
  printImageBase64: (
    Base64: string,
    isImin: number,
    opts?: PrinterImageOptions
  ) => void;
};
let isNativeEventEmitter =
  Platform.OS === "android" ? NativeEventEmitter : null;
export declare const NetPrinterEventEmitter: isNativeEventEmitter;
export declare enum RN_THERMAL_RECEIPT_PRINTER_EVENTS {
  EVENT_NET_PRINTER_SCANNED_SUCCESS = "scannerResolved",
  EVENT_NET_PRINTER_SCANNING = "scannerRunning",
  EVENT_NET_PRINTER_SCANNED_ERROR = "registerError",
}
