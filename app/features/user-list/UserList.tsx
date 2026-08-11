"use client";

import React from "react";
import useUserListViewModel from "./hooks/useUserListViewModel";
import UserListInner from "./UserListInner";

export const UserList: React.FC = () => {
  const vm = useUserListViewModel();

  return <UserListInner {...vm} />;
};

export default UserList;
