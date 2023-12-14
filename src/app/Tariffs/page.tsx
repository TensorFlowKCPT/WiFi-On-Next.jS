"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
// @ts-ignore
import Header from "components/header";
// @ts-ignore
import Sidemenu from "components/filterSideMenu";
// @ts-ignore
import Tariffs from "components/tariffs";
// @ts-ignore
import ProviderTable from "components/ProviderTable"
import { motion } from 'framer-motion';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import Providers from '../Providers/page';




const tariffs: React.FC = () => {
    const searchParams = useSearchParams()
    
    const [tariffs, setTariffs] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`/api/getTariffs?address=${searchParams?.get("address")}`);
          const data = await response.json();
          setTariffs(data);
        } catch (error) {
          console.error('Error fetching tariffs:', error);
        }
      };
      // Fetch data when the address parameter changes
      if (searchParams?.get("address")) {
        fetchData();
      }
    }, [searchParams?.get("address")]);

    const [providers, setProviders] = useState<any[]>([]);
    useEffect(() => {
      const fetchProviders = async () => {
        try {
          const uniqueProviders = new Set();
          // @ts-ignore
          var providerIds = []
          tariffs.forEach((tariff) => {
            if
            // @ts-ignore
            (!providerIds.includes(tariff.providerId)){

            
            const providerInfo = {
              // @ts-ignore
              providerId: tariff.providerId,
              // @ts-ignore
              providerName: tariff.providerName,
              // @ts-ignore
              imageUrl: tariff.ImageUrl,
            };
            uniqueProviders.add(providerInfo);
            // @ts-ignore
            providerIds.push(tariff.providerId)
          }
          });
  
          setProviders(Array.from(uniqueProviders));
        } catch (error) {
          console.error('Error fetching providers:', error);
        }
      };
  
      fetchProviders();
    }, [tariffs]);
    return (
      <div>
      <Header />
      <div className="flex">
        <Sidemenu providers = {providers}/>
        <ProviderTable providers = {providers}/>
        <div className="flex-1 mt-10">
          <Tariffs tariffs = {tariffs}/>
        </div>
      </div>
    </div>
    );
  };

export default tariffs;
