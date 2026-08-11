import { useCallback, useState } from "react";

export const useUserListViewModel = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const addUser = useCallback((name: string) => {
    const trimmed = name.trim();
    if (!trimmed) {
      return false;
    }
    setUsers((prev) => [...prev, trimmed]);
    return true;
  }, []);

  const submitInput = useCallback(() => {
    const added = addUser(inputValue);
    if (added) {
      setInputValue("");
    }
    return added;
  }, [addUser, inputValue]);

  const removeUser = useCallback((index: number) => {
    setUsers((prev) => prev.filter((_, i) => i !== index));
  }, []);

  return {
    users,
    inputValue,
    setInputValue,
    addUser,
    submitInput,
    removeUser,
  } as const;
};

export default useUserListViewModel;
