import type { FC } from "react";
import { NewVersionProps } from "../types";

const NewVersion: FC<NewVersionProps> = ({ onClick }) => {
    return (
        <>A new version is available. <button onClick={() => onClick()}>Refresh</button></>
    );
};

export default NewVersion;