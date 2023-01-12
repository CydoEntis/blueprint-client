import { User } from "@/types/user-types";
import Avatar from "../avatars/Avatar";

type Props = {
  users: User[];
};

const Users = ({ users }: Props) => {
  return (
    <div className="relative h-8">
      {users.map((user, index) => {
        let margin = index * 3;
        return (
          <Avatar
            key={user.id}
            className={`absolute ml-${margin} h-8 w-8`}
            src={user.profilePicture}
          />
        );
      })}
      <div className="absolute ml-9 h-8 w-8 rounded-full border-2 border-white">
        <div className="flex h-full w-full items-center justify-center rounded-full bg-blue-40">
          <h3 className="text-center text-sm text-white">7+</h3>
        </div>
      </div>
    </div>
  );
};

export default Users;
