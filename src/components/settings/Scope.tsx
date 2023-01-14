import React from "react";
import { Chip } from "@material-ui/core";
import SettingScope from "./SettingScope";

interface statusProps {
    value: SettingScope;
}

const Scope = ({ value }: statusProps) => {
    return (
        <>
            {value === SettingScope.PRIVATE && <Chip variant="outlined" color="primary" label="خصوصی" />}
            {value === SettingScope.PUBLIC && <Chip variant="outlined" label="عمومی" />}
        </>
    );
}

export default React.memo(Scope);
