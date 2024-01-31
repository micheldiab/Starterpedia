// DesignerInfo.tsx
import React from 'react';
import Image from "next/image"; 

interface DesignerInfoProps {
  name: string;
  photoUrl: string;
}

const DesignerInfo: React.FC<DesignerInfoProps> = ({ name, photoUrl }) => {
  return (
    <div className="flex items-center mt-4">
      <Image
        src={photoUrl}
        alt={`${name}'s photo`}
        className="w-10 h-10 rounded-full mr-3" width={400} height={400}
      />
      <div>
        <p className="text-black font-semibold">{name}</p>
        {/* Add more information about the designer if needed */}
      </div>
    </div>
  );
};

export default DesignerInfo;
