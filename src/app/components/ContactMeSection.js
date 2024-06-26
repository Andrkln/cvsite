'use client'
import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext.client";

const ContactMeSection = () => { 

const listColor = '#6a6af5'
 const {isLoading, response, error, submit} = useSubmit(); 
 const { onOpen } = useAlertContext(); 
 
 const formik = useFormik({ 
   initialValues: { 
     firstName: "", 
     email: "", 
     type: "hireMe", 
     comment: "", 
   }, 
   onSubmit: (values) => { 
     submit(values); 
   }, 
   validationSchema: Yup.object({ 
     firstName: Yup.string().required("Required"), 
     email: Yup.string().email("Invalid email address").required("Required"), 
     comment: Yup.string() 
       .min(25, "Must be at least 25 characters") 
       .required("Required"), 
   }), 
 }); 
 
 useEffect(() => { 
   if (response) { 
     onOpen(response.type, response.message); 
     if (response.type === 'success') { 
       formik.resetForm(); 
     } 
   } 
 }, [response]); 
 
 return ( 
   <FullScreenSection 
     backgroundColor="#512DA8" 
     py={16} 
     spacing={8} 
   > 
     <VStack w="90vw" p={32} > 
       <Heading as="h1" id="contactme-section"
       color='white' w="45vw" align='center'
       > 
         Contact me 
       </Heading> 
       <Box p={6} rounded="md" w="70vw"> 
         <form onSubmit={formik.handleSubmit}> 
           <VStack spacing={4}> 
             <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}> 
               <FormLabel htmlFor="firstName" color='white'>Name</FormLabel> 
               <Input 
                 id="firstName" 
                 name="firstName" 
                 {...formik.getFieldProps("firstName")} 
               /> 
               <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage> 
             </FormControl> 
             <FormControl isInvalid={!!formik.errors.email && formik.touched.email}> 
               <FormLabel htmlFor="email" color='white' >Email Address</FormLabel> 
               <Input 
                 id="email" 
                 name="email" 
                 type="email" 
                 {...formik.getFieldProps("email")} 
               /> 
               <FormErrorMessage>{formik.errors.email}</FormErrorMessage> 
             </FormControl> 
             <FormControl> 
               <FormLabel htmlFor="type" color='white'>Type of enquiry</FormLabel> 
               <Select id="type" name="type" {...formik.getFieldProps("type")}
               color='white' > 
               <option value="Frontend" style={{ backgroundColor: listColor }}>Frontend
                  </option >
                  <option value="Backend" style={{ backgroundColor: listColor }}>
                    Backend
                  </option>
                  <option value="Fullstack" style={{ backgroundColor: listColor }}>Fullstack
                  </option>
                  <option value="Chat" style={{ backgroundColor: listColor }} >Chat Bot
                  </option>
                  <option value="Chat" style={{ backgroundColor: listColor }} >Chat Bot
                  </option>
                  <option value="Telegram" style={{ backgroundColor: listColor }}>Telegram Bot
                  </option>
                  <option value="Markeitng" style={{ backgroundColor: listColor }}>Web Markeitng
                  </option>
                  <option value="other" style={{ backgroundColor: listColor }} >Other
                  </option>
               </Select> 
             </FormControl> 
             <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}> 
               <FormLabel htmlFor="comment" color='white' >Your message</FormLabel> 
               <Textarea 
                 id="comment" 
                 name="comment" 
                 height={250} 
                 {...formik.getFieldProps("comment")} 
               /> 
               <FormErrorMessage>{formik.errors.comment}</FormErrorMessage> 
             </FormControl> 
             <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}> 
               Submit 
             </Button> 
           </VStack> 
         </form> 
       </Box> 
     </VStack> 
   </FullScreenSection> 
 ); 
}; 
 
export default ContactMeSection;
