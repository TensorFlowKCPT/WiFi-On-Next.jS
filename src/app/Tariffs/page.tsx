"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from "components/header";
import Sidemenu from "components/filterSideMenu";
import Tariffs from "components/tariffs";
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
          var providerIds = []
          tariffs.forEach((tariff) => {
            if(!providerIds.includes(tariff.providerId)){

            
            const providerInfo = {
              providerId: tariff.providerId,
              providerName: tariff.providerName,
              imageUrl: tariff.ImageUrl,
            };
            uniqueProviders.add(providerInfo);
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
