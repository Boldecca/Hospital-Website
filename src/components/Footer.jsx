export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-10">
      <p className="text-gray-600 text-sm">
        © {new Date().getFullYear()} HealthCare Plus. All rights reserved.
      </p>
    </footer>
  );
}
