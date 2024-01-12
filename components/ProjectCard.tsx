const ProjectCard = ({title, description}) => {
    return (
        <div className="flex flex-col items-center justify-start ">
            <div className="h-full w-full bg-gradient-to-r rounded-2xl from-startingblue to-endingpurple p-[6px]">
                <div className="flex flex-col h-full w-fit items-start justify-center bg-white back rounded-xl">
                    <h1 className="p-5 text-4xl gradienttext font-extrabold">{title}</h1>
                    <br/>
                    <p className={"p-3 text-2xl font-medium"}>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;