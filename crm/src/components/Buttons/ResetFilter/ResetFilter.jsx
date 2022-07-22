import { Button } from "@mui/material";
import { withStyles } from "@material-ui/core/styles";

export const ResetFilter = () => {
  const StyledButton = withStyles((theme) => ({
    root: {
      "&": {
        background: "none",
        color: "#6B8795",
        textTransform: "inherit",
        width: "100%",
        fontSize: "12px",
      },
      "&:hover": {
        background: "none",
        color: "green",
      },
    },
    label: {},
  }))(Button);

  return (
    <>
      <StyledButton variant="text"> Сбросить фильтр </StyledButton>
    </>
  );
};
