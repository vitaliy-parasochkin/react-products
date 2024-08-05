export default function Footer() {
  const date = new Date();

  return (
    <footer className="flex justify-center items-center p-2 border-t text-xs">
      &copy; {date.getFullYear()} Vitalii Parasochkin. All rights reserved.
    </footer>
  );
}
