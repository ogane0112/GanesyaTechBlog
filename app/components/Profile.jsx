import Image from 'next/image';
import Link from "next/link";
const ProfileComponent = () => {
  return (
    <>
    <div className="bg-white rounded-lg shadow-md p-10 menu  lg:block">
    <div className="flex items-center justify-center mb-4">
      <Image
        src="/profile.png" 
        alt="Profile Picture"
        width={80}
        height={80}
        className="rounded-full"
      />
    </div>
    <h2 className="text-xl font-semibold mb-2 text-center">ガネーシャ</h2>
    <p className="text-gray-700 text-sm mb-4 text-center">大学生</p>
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2 text-center">About</h3>
      <p className="text-gray-700 text-sm">
        分かりやすく技術系の事について発信していきます！
      </p>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2 text-center">SNS</h3>
      <div className="flex flex-col">
        <Link
            href="https://www.youtube.com/channel/UCKDFmxgGQ2GT2V3vnrWem-w"       
            className="bg-red-200 text-black text-sm font-medium mr-2 px-2.5 py-0.5 rounded mb-2 font-semibold "
            >
          Youtube
        </Link>
        <Link 
        href = "https://twitter.com/ganesya0112"
        className="bg-blue-200 text-black text-sm font-medium mr-2 px-2.5 py-0.5 rounded mb-2 font-semibold ">
          X
        </Link>
        <Link 
        href = "https://note.com/gifted_nerine416"
        className="bg-yellow-200 text-black text-sm font-medium mr-2 px-2.5 py-0.5 rounded mb-2 font-semibold ">
          note
        </Link>
        <Link 
        href = "https://github.com/ogane0112"
        className="bg-black text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded mb-2 font-semibold ">
          Github
        </Link>
      </div>
    </div>
  </div>
  </>
  );
};

export default ProfileComponent;