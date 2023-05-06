import { useRouter } from "next/navigation";

export function withRefresh(action: any) {
  const router = useRouter();
  return async (formData: FormData) => {
    await action(formData);
    router.refresh();
  };
}
