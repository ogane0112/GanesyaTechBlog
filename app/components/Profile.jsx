import Image from 'next/image';

const ProfileComponent = () => {
  return (
    <>
    <div className="bg-white rounded-lg shadow-md p-10 menu hidden lg:block">
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
      <h3 className="text-lg font-semibold mb-2">About</h3>
      <p className="text-gray-700 text-sm">
        分かりやすく技術系の事について発信していきます！
      </p>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2">SNS</h3>
      <div className="flex flex-wrap">
        <span className="bg-red-200 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded mb-2">
          React
        </span>
        <span className="bg-blue-200 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded mb-2">
          JavaScript
        </span>
        <span className="bg-yellow-200 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded mb-2">
          Tailwind CSS
        </span>
        <span className="bg-green-200 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded mb-2">
          Next.js
        </span>
      </div>
    </div>
  </div>
  </>
  );
};

export default ProfileComponent;