import Image from "next/image";
import { useState } from "react";

function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}

const BlurImage = ({ url }) => {

    return (
        <a href={url} className="group">
            <div  className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
                <Image
                    alt=""
                    src={url}
                    layout={"fill"}
                    objectFit="contain"
                    className={
                        "group-hover:opacity-75 duration-700 ease-in-out grayscale-0 blur-0 scale-100"
                    }
                />
                <h3 className="mt-4 text-sm text-gray-700 text-center">nothing</h3>
                <p className="mt-1 text-lg font-medium text-gray-900 text-center">
                    nothing
                </p>
            </div>
        </a>
    );
};

function getSpanEstimate(size): number {
    if (size > 250) {
        return 2
    }
    return 1
}
export default BlurImage;
