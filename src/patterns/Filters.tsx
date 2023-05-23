import Collapse from "@mui/material/Collapse"
import Box from "@/components/wrapper/Box";
import Fade from "@mui/material/Fade";
import SearchForm from "./SearchForm";
import theme from "@/theming/default";

/* =====================================================
Title: <Filters />
Description: Pattern for displaying index page filter panel mainly re-using the SearchForm inside a collapsible panel
Usage:

```tsx
<Filters expanded={boolean} />
```

===================================================== */

interface IFilterPanel {
  expanded: boolean
}

const Filters = (props: IFilterPanel) => {
  return (
    <Fade in={props.expanded}>
      <Collapse
        in={props.expanded}
        timeout="auto" 
        unmountOnExit
        sx={{height: 300}}
      >
        <Box p={2} bgcolor={theme.palette.common.white} position="absolute" zIndex={10}>
          <SearchForm />
        </Box>
      </Collapse>
    </Fade>
  )
}

export default Filters