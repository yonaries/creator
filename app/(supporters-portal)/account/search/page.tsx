"use client";

import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useDebounce } from "@/hooks/useDebounce";
import React, { useEffect, useState } from "react";
import { searchPages } from "../actions/search-page";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

type Props = {};

const Search = (props: Props) => {
  const [keyword, setKeyword] = useState<string>("");
  const debounceKeyword = useDebounce(keyword);
  const [searchResult, setSearchResult] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      if (debounceKeyword.length > 0) {
        const pages = await searchPages(debounceKeyword);
        pages && setSearchResult(pages);
      } else {
        setSearchResult([]);
      }
      setIsLoading(false);
    })();
  }, [debounceKeyword]);

  return (
    <div>
      <span className="text-3xl font-bold">Find Creators</span>
      <Separator className="my-3" />
      <Input
        placeholder="Search"
        className="h-10 w-full rounded-full"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <div className="my-3 grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
        {isLoading ? (
          <div className="my-3 grid w-full grid-cols-1 gap-4 p-4 md:grid-cols-2">
            <div className="flex w-full flex-col items-center justify-center space-y-5 rounded-md">
              <div className="h-28 w-28 animate-pulse rounded-full bg-muted"></div>
              <div className="h-4 w-28 rounded-full"></div>
            </div>
            <div className="flex w-full flex-col items-center justify-center space-y-5 rounded-md">
              <div className="h-28 w-28 animate-pulse rounded-full bg-muted"></div>
              <div className="h-4 w-28 rounded-full"></div>
            </div>
            <div className="flex w-full flex-col items-center justify-center space-y-5 rounded-md">
              <div className="h-28 w-28 animate-pulse rounded-full bg-muted"></div>
              <div className="h-4 w-28 rounded-full"></div>
            </div>
            <div className="flex w-full flex-col items-center justify-center space-y-5 rounded-md">
              <div className="h-28 w-28 animate-pulse rounded-full bg-muted"></div>
              <div className="h-4 w-28 rounded-full"></div>
            </div>
          </div>
        ) : (
          searchResult &&
          searchResult.length > 0 &&
          searchResult.map((page, index) => (
            <Link key={index} href={`/account/${page.url}`}>
              <div className="flex flex-col items-center justify-center space-y-5 rounded-md">
                <Avatar className="h-28 w-28 rounded-md">
                  <AvatarImage src={page.profileImage} />
                  <AvatarFallback>
                    {`${page.name[0]}${
                      page.name[page.name.length - 1]
                    }`.toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <span className="text-lg font-semibold">{page.name}</span>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Search;
