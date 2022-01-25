import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";


export function Likes() {
  const [initialCount, updatedCount] = useState(0);
  const [disLike, updatedDisLike] = useState(0);
  const styles = {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
  };
  return (
    <div style={styles}>
      <IconButton
        color="primary"
        aria-label="add to shopping cart"
        onClick={(e) => {
          updatedCount(initialCount + 1);
        }}
      >
        <Badge badgeContent={initialCount} color="success">
          👍
        </Badge>
      </IconButton>
      <IconButton
        color="primary"
        aria-label="add to shopping cart"
        onClick={(e) => {
          updatedDisLike(disLike + 1);
        }}
      >
        <Badge badgeContent={disLike} color="error">
          👎
        </Badge>
      </IconButton>
    </div>
  );
}
