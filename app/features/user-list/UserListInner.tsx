import React from "react";
import Button from "@/app/components/button/Button";

export interface UserListInnerProps {
  users: readonly string[];
  inputValue: string;
  setInputValue: (v: string) => void;
  submitInput: () => boolean;
  removeUser: (index: number) => void;
}

export const UserListInner: React.FC<
  UserListInnerProps
> = ({
  users,
  inputValue,
  setInputValue,
  submitInput,
  removeUser,
}) => (
  <section className="w-full max-w-2xl mx-auto p-6 bg-white/80 dark:bg-black/60 rounded-lg shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-semibold">User List</h2>
      <span className="text-sm text-zinc-500">
        Manage users below
      </span>
    </div>

    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitInput();
      }}
      className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center mb-4"
    >
      <label
        htmlFor="user-name"
        className="text-sm text-zinc-700"
      >
        Name
      </label>
      <input
        id="user-name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter user name"
        className="col-span-1 sm:col-span-2 border border-zinc-200 dark:border-zinc-800 rounded px-3 py-2 w-full"
      />
      <div className="sm:col-span-3 flex justify-end">
        <Button
          type="submit"
          className="px-4 py-2"
        >
          Add user
        </Button>
      </div>
    </form>

    <ul className="divide-y divide-zinc-100 dark:divide-zinc-800">
      {users.length === 0 && (
        <li className="py-4 text-sm text-zinc-500">
          No users yet.
        </li>
      )}
      {users.map((user, index) => (
        <li
          key={`${user}-${index}`}
          className="flex items-center justify-between py-3"
        >
          <div>
            <div className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
              {user}
            </div>
          </div>
          <div>
            <button
              onClick={() => removeUser(index)}
              aria-label={`Remove ${user}`}
              className="text-red-600 hover:text-red-800 text-sm"
            >
              Remove
            </button>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default UserListInner;
