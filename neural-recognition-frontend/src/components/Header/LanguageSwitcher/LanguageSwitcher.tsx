import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useTranslationApi } from '../../../contexts/translate';
import { english } from '../../../contexts/translate/languages';
import { ukrainian } from '../../../contexts/translate/languages/ukrainian';

import css from './LanguageSwitcher.module.scss';

const fontStyles = { style: { fontSize: 40 } };

export const LanguageSwitcher = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedLanguageName, setSelectedLanguageName] = React.useState('english');
  const { language, setLanguage } = useTranslationApi();

  const languageMap = React.useMemo(() => {
    return [
      {
        language: english,
        label: language.header.languageSwitcher.engligh,
        value: 'english',
      },
      {
        language: ukrainian,
        label: language.header.languageSwitcher.ukrainian,
        value: 'ukrainian',
      },
    ]
  }, [language]);

  const handleChange = React.useCallback((event: SelectChangeEvent) => {
    const value = event.target?.value;
    const languageItem = languageMap.find((item) => item.value === value);
    if(!languageItem || !setLanguage) {
      return;
    }

    setSelectedLanguageName(languageItem.value);
    setLanguage(languageItem.language);
  }, [languageMap, setLanguage]);

  const handleClickOpen = React.useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = React.useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div className={css.languageSwitcher}>
      <Button onClick={handleClickOpen}>
        <img 
          className={css.icon}
          src="https://icon-library.com/images/pony-icon/pony-icon-2.jpg"
          alt="Settings"
          title="Settings"
        />
      </Button>
      <Dialog 
        fullWidth={true}
        disableEscapeKeyDown 
        open={open} 
        onClose={handleClose}
      >
        <DialogTitle >{language.header.languageSwitcher.title}</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="demo-dialog-native">{language.header.languageSwitcher.label}</InputLabel>
              <Select
                native
                value={selectedLanguageName}
                onChange={handleChange}
                input={<OutlinedInput 
                  label={language.header.languageSwitcher.label} 
                  id="demo-dialog-native" />}
              >
                {
                  languageMap.map(item => (
                    <option 
                      value={item.value}
                    >
                      {item.label}
                    </option>
                  ))
                }
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            {language.modal.confirm}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}