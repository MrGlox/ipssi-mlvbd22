import {
  Link as RouterLink,
  useResolvedPath,
  useMatch,
} from "react-router-dom";

const Link = ({ to, ...props }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <RouterLink
      to={to}
      {...props}
      style={{
        color: "white",
        textDecoration: match ? "underline" : "none",
      }}
    />
  );
};

export default Link;
