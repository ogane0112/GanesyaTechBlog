import Link from "next/link";

const NavLink = ({ href, title }) => {
                let color;
                switch (title) {
                  case 'プログラミング':
                    color = 'bg-yellow-300 text-white';
                    break;
                  case 'セキュリティ':
                    color = 'bg-blue-500 text-white';
                    break;
                  case '機械学習':
                    color = 'bg-green-500 text-white';
                    break;
                  case "読書メモ":
                    color='bg-orange-500 text-white'
                    break;
                  case "ツール":
                    color = 'bg-teal-500 text-white'
                    break;
                  case "アルゴリズム":
                    color ="bg-fuchsia-400 text-white";
                    break;
                  case "工作":
                    color = "bg-red-300 text-white"
                    break;

                  default:
                    color = 'bg-slate-500 text-white';
                }
  return (
    <Link
      href={href}
      className={`block ${color} rounded-md  font-semibold py-2 px-3 text-center text-sm  hover:text-zinc-500 `}>
      {title}
    </Link>
  );
};

export default NavLink;