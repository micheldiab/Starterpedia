// DesignerInfo.tsx
import React from 'react';
import Image from "next/image"; 


interface DesignerInfoProps {
  name: string;
  photoUrl: string;
}

const DesignerInfo: React.FC<DesignerInfoProps> = ({ name, photoUrl }) => {
  return (
    <div className="flex ">
      <Image
        src={photoUrl}
        alt={`${name}'s photo`}
        className="w-20 h-20 mr-3" width={700} height={400}
      />
      <div>
        <p className="text-black font-semibold">{name}</p>
        {/* Add more information about the designer if needed */}
      </div>
    </div>
  );
};

export default DesignerInfo;
