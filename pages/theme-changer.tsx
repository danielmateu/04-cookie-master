import React, { useState, ChangeEvent, useEffect } from 'react'
import { Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { Layout } from '../components/layouts';

import Cookies from 'js-cookie';

const ThemeChangerPage = (props) => {

  console.log({props})

  const [currentTheme, setCurrentTheme] = useState('light');

  const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {

    const selectedTheme = event.target.value;

    console.log({ selectedTheme });

    setCurrentTheme(selectedTheme);

    localStorage.setItem('theme', selectedTheme);
    Cookies.set('theme', selectedTheme);
  }

  useEffect(() => {
    console.log('LocalStorage: ', localStorage.getItem('theme'));


  }, [])

  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Tema</FormLabel>
            <RadioGroup
              value={currentTheme}
              onChange={onThemeChange}
            >
              <FormControlLabel value={'light'} control={<Radio />} label="Light" />
              <FormControlLabel value={'dark'} control={<Radio />} label="Dark" />
              <FormControlLabel value={'custom'} control={<Radio />} label="Custom" />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </Layout>
  )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {



  return {
    props: {
      theme: 'Hola',
    }
  }
}


export default ThemeChangerPage;