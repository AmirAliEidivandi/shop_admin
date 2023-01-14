import SettingScope from "./SettingScope";

export default interface ISetting {
    id: string;
    title: string;
    settingKey: string;
    settingValue: string;
    scope: SettingScope;
    version: string;
}
