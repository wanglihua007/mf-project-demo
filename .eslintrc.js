module.exports = {
  extends: ["react-app"],
  rules: {
    "import/no-anonymous-default-export": 0,
    "no-empty-pattern": 0,
    "no-extra-boolean-cast": 0,
    "no-unused-vars": 0,
    "react/prop-types": 0,
    "react/display-name": 0,
    "react/jsx-no-target-blank": 0,
    "react-hooks/exhaustive-deps": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "import/no-anonymous-default-export": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/consistent-type-assertions": "error",
  },
  globals: {
    REACT_APP_ENV: true,
    GLOBAL_CONFIG: true,
  },
};
