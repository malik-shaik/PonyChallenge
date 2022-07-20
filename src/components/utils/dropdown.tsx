import React, { FC } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import { ExpandMoreRounded } from '@material-ui/icons'

interface DropDownProps {
  value: number
  handleChange: (event: React.ChangeEvent<{ value: unknown }>) => void
  items: number[]
}
export const DropDown: FC<DropDownProps> = ({ value, handleChange, items }) => {
  const classes = useStyles()

  return (
    <FormControl className={classes.formControl}>
      <Select
        data-testid="select"
        value={value}
        onChange={handleChange}
        disableUnderline
        IconComponent={ExpandMoreRounded}
        MenuProps={{
          classes: {
            list: classes.list,
            paper: classes.paper,
          },
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: 'center',
          },
          getContentAnchorEl: null,
        }}
        classes={{
          select: classes.select,
          icon: classes.selectIcon,
        }}
      >
        {items.map((item) => (
          <MenuItem key={`key-${item}`} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

const useStyles = makeStyles(() => ({
  formControl: {
    '& .MuiInputBase-root': {
      color: '#5386e4',
      borderColor: '#5386e4',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderRadius: '5px',
      minWidth: '60px',
      height: '30px',
      justifyContent: 'center',
    },
    '& .MuiSelect-select.MuiSelect-select': {
      paddingRight: '0px',
    },
  },
  select: {
    width: 'auto',
    fontSize: '15px',
    fontWeight: 'bold',
    '&:focus': {
      backgroundColor: 'transparent',
    },
  },
  selectIcon: {
    position: 'relative',
    color: '#5386e4',
    fontSize: '18px',
  },
  paper: {
    borderRadius: 5,
    marginTop: 8,
  },
  list: {
    paddingTop: 0,
    paddingBottom: 0,
    '& li': {
      color: '#5386e4',
      paddingTop: 4,
      paddingBottom: 4,
      fontSize: '15px',
    },
    '& li.Mui-selected': {
      color: 'white',
      background: '#5386e4',
    },
    '& li.Mui-selected:hover': {
      background: '#5386e4',
    },
  },
}))
