export interface UserSessionData {
  userId: string;
}

export interface UserSession {
  data?: UserSessionData;
  error?: Error;
}

export const useUserSession = (): UserSession => {
  return {
    data: {
      userId: '110c3d5e-49fb-4b5b-b719-c3fcd57b3050',
    },
  };
};
