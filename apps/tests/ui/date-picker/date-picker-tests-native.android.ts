﻿import datePickerModule = require("ui/date-picker");

export function getNativeYear(datePicker: datePickerModule.DatePicker): number {
    return datePicker.android.getYear();
}

export function getNativeMonth(datePicker: datePickerModule.DatePicker): number {
    return datePicker.android.getMonth() + 1;
}

export function getNativeDay(datePicker: datePickerModule.DatePicker): number {
    return datePicker.android.getDayOfMonth();
}

export function setNativeYear(datePicker: datePickerModule.DatePicker, value: number): void {
    datePicker.android.updateDate(value, datePicker.android.getMonth(), datePicker.android.getDayOfMonth());
}

export function setNativeMonth(datePicker: datePickerModule.DatePicker, value: number): void {
    datePicker.android.updateDate(datePicker.android.getYear(), value - 1, datePicker.android.getDayOfMonth());
}

export function setNativeDay(datePicker: datePickerModule.DatePicker, value: number): void {
    datePicker.android.updateDate(datePicker.android.getYear(), datePicker.android.getMonth(), value);
}
