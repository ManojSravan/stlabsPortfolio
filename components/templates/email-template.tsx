 
interface EmailTemplateProps {
  username: string;
company:string;
email:string;
budget:string;
about:string;
}

export function EmailTemplate({ username, company, email, budget, about }: EmailTemplateProps) {
  return (
    <div>
      <h1>Welcome, {username}!</h1>
    </div>
  );
}