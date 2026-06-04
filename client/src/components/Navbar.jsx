function Navbar() {
  const today = new Date().toLocaleDateString(
    "en-IN",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <nav
      className="
      sticky
      top-0
      z-50
      bg-white/80
      backdrop-blur-md
      border-b
      border-slate-200
      shadow-sm
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex justify-between items-center">

          {/* Logo Section */}

          <div>

            <h1
              className="
              text-3xl
              font-extrabold
              text-blue-600
              tracking-tight
              "
            >
              🪙 CoinTrail
            </h1>

            <p
              className="
              text-sm
              text-gray-500
              mt-1
              "
            >
              Smart Expense Tracker
            </p>

          </div>

          {/* Date Card */}

          <div
            className="
            hidden
            md:block
            bg-slate-100
            px-4
            py-2
            rounded-xl
            "
          >

            <p
              className="
              text-xs
              uppercase
              tracking-wider
              text-gray-500
              "
            >
              Today
            </p>

            <p
              className="
              text-sm
              font-semibold
              text-gray-700
              "
            >
              {today}
            </p>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;