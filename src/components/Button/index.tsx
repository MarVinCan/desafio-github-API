type Props = {
    text:string;
};

export default function Button({text}:Props){
    return (
        <div className="ghapi-button">{text}</div>
    );
    
}