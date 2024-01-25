import React, { useEffect, useState } from "react";
import { useInfiniteQuery } from "react-query";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
  Button,
} from "react-native";
import { OldData, ResponseData, Result } from "./types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Updater } from "react-query/types/core/utils";
import { queryClient } from "./utils";
import { UserCard } from "./components/UserCard";

const fetchPage = async ({ pageParam = 1 }) => {
  const url = `https://randomuser.me/api/?page=${pageParam}&results=7&seed=abc`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const UserList = () => {
  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
    useInfiniteQuery<ResponseData>("myData", fetchPage, {
      getNextPageParam: (lastPage) => lastPage.info.page + 1,
    });
  const insets = useSafeAreaInsets();

  // Here i simulate data changing every 10 seconds to display new data fetched from api
  useEffect(() => {
    const interval = setInterval(() => {
      queryClient.setQueryData(
        "myData",

        (oldData: Updater<ResponseData, any>) => {
          const newData = oldData
            ? {
                ...oldData,
                pages: oldData.pages.map((page: { results: Result[] }) => ({
                  ...page,
                  results: page.results.map((result: Result) => ({
                    ...result,
                    registered: {
                      ...result.registered,
                      date: new Date().toISOString(),
                    },
                  })),
                })),
              }
            : oldData;

          return newData;
        }
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const ListEndLoader = () => {
    if (isFetchingNextPage) {
      return <ActivityIndicator size={"large"} />;
    }
    return null;
  };

  if (isFetching && !isFetchingNextPage) {
    return <ActivityIndicator size={"small"} />;
  }
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        flex: 1,
      }}
    >
      <FlatList
        data={data?.pages.flatMap((page) => page.results) ?? []}
        renderItem={({ item }) => <UserCard item={item} />}
        keyExtractor={(item) => item.login.uuid}
        onEndReached={() => hasNextPage && fetchNextPage()}
        onEndReachedThreshold={0.8}
        ListFooterComponent={ListEndLoader}
      />
    </View>
  );
};
