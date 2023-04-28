interface HeaderProps {
  text: string;
}

export default function Header({ text }: HeaderProps) {
  return (
    <div className="home-header-container">
      <h1 className="home-header">{text}</h1>
    </div>
  );
}
