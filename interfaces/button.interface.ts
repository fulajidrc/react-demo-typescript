export interface ButtonModel{
    text:string;
    type:"button" | "submit" | "reset" | undefined;
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    processingStatus:boolean;
    color?:string;
    className?: string;
}