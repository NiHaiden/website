export default function GridImage({url}) {
    return (
        <img
            src={url}
            key={url}
            className={"mb-3 w-full rounded-3xl drop-shadow-md aspect-auto"}
        />
    );
}