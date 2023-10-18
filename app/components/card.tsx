import Image from "next/image";

interface UserCardProps {
  userName: string;
  local: any;
  text: string;
}

const UserCard: React.FC<UserCardProps> = ({ userName, local, text }) => {
  return (
    <div className="rounded-t flex flex-col items-center justify-center w-auto h-auto border-l border-r border-t">
      <p className="text-lg p-1">{`Seja bem-vindo, ${userName}!`}</p>
      <Image
        src={local}
        alt={`Imagem do local: ${local}`}
        width={150}
        height={150}
      />
      <p className="text-xl bg-[#16498A] text-slate-100 p-2 w-full text-center h-full rounded-b-lg font-bold">
        {text}
      </p>
    </div>
  );
};

export default UserCard;
