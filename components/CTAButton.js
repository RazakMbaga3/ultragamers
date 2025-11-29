import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export default function CTAButton({
  children,
  variant = "primary",
  icon = <ArrowRight size={20} />, // default icon
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center gap-2 px-5 py-3 md:px-6 md:py-3 rounded font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 text-base md:text-lg w-full sm:w-auto text-center";
  const variants = {
    primary:
      "bg-[#072559] text-white hover:bg-[#0D0D0D] hover:text-[#072559] shadow-md hover:shadow-lg",
    outline:
      "border border-white text-white bg-transparent hover:bg-[#072559] hover:text-white",
    black:
      "bg-[#0D0D0D] text-white hover:bg-[#072559] hover:text-white shadow-md hover:shadow-lg",
  };
  return (
    <motion.button
      className={cn(baseStyles, variants[variant], className)}
      whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(7,37,89,0.18)" }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      {...props}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </motion.button>
  );
}
