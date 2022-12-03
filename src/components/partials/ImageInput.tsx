import React from "react";
import { Box } from "@material-ui/core";
import placeholder from "../../assets/images/placeholder.jpg";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        image_title: {
            margin: theme.spacing(1),
        },
        box: {
            display: "flex",
        },
        img: {
            maxWidth: 200,
            height: "auto",
            margin: theme.spacing(1, "block"),
            display: "block",
        },
    })
);

interface ImageInputProps {
    onChange: (file: File) => void;
}

export default function ImageInput({ onChange }: ImageInputProps) {
    const styles = useStyles();
    const filesRef = React.useRef<HTMLInputElement>(null);
    const [imagePreviewSrc, setImagePreviewSrc] = React.useState<string>(placeholder);
    const handleChange = (e: React.ChangeEvent) => {
        if (filesRef.current) {
            const files = filesRef.current.files as FileList;
            showImagePreview(files[0] as File);
            onChange(files[0]);
        }
    };
    const showImagePreview = (file: File) => {
        const fileReader = new FileReader();
        fileReader.onload = (e) => {
            if (e.target) {
                setImagePreviewSrc(e.target.result as string);
            }
        };
        fileReader.readAsDataURL(file);
    };
    return (
        <Box>
            <img className={styles.img} src={imagePreviewSrc} alt="" />
            <input ref={filesRef} type="file" onChange={handleChange} accept="image/gif, image/jpeg, image/png" />
        </Box>
    );
}
