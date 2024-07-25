import { Inter } from "next/font/google";
import './globals.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import BootstrapInstall from "@/app/components/bootStrap/BootstrapInstall";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MyClasses",
  icons:{
    icon:[
      '/favicon.ico?v=4',
    ],
    apple:[
      '/apple-touch-icon.png?v=4',
    ],
    shortcut:[
      '/apple-touch-icon.png'
    ]
  },
  manifest:'/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
     <BootstrapInstall/>
    <meta name={'viewport'}
     content={'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'}  />
    </head>
      <body className={inter.className}> 
        {children}
        </body>
    </html>
  );
}
