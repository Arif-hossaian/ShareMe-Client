import { IFile } from "../../libs/types";
import { sizeInMb } from "../../libs/sizeInMb";
import { FunctionComponent } from "react";
import Image from "next/image"

const RenderFile: FunctionComponent<{
  file: IFile;
}> = ({ file: { formate, sizeInBytes, name } }) => {
  return (
    <div>
      <Image src={`/images/${formate}.png`} layout="fill" alt="image"/>
      <span>{name}</span>
      <span>{sizeInMb(sizeInBytes)}</span>
    </div>
  );
};

export default RenderFile;