import React, { useEffect, useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Bird from './src/components/Bird';
import Obstacle from './src/components/Obstacle';

export default function App() {
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;
  const birdLeft = screenWidth/2;
  const [birdBottom, setBirdBottom]= useState(screenHeight / 2)
  const [obstaclesLeft, setObstaclesLeft]= useState(screenWidth)
  const [obstaclesLeftTwo, setObstaclesLeftTwo]= useState(screenWidth + screenWidth/2 + 30)
  const [obstaclesNegHeight, setObstaclesNegHeight]= useState(0)
  const [obstaclesNegHeightTwo, setObstaclesNegHeightTwo]= useState(0)
  const [isGameOver, setIsGameOver]= useState(false)
  const [score, setScore]= useState(0)
  const gravity = 3
  let obstacleWidth = 60
  let obstacleHeight = 300
  let gap = 200
  let gameTimerId
  let obstaclesTimerId
  let obstaclesTimerIdTwo


  //Bird
  useEffect(()=> {

        if(birdBottom > 0){
      gameTimerId = setInterval(()=>{
        setBirdBottom(birdBottom => birdBottom - gravity),30
      })
      return() => {
        clearInterval(gameTimerId);
      }
        }
  });

  //Start first obstacle
  useEffect(() => {
    if (obstaclesLeft > -60) {
      obstaclesTimerId = setInterval(() => {
        setObstaclesLeft(obstaclesLeft => obstaclesLeft - 5)
      }, 30)
      return () => {
        clearInterval(obstaclesTimerId)
      }
    } else {
      setScore(score => score + 1)
      setObstaclesLeft(screenWidth)
      setObstaclesNegHeight( - Math.random() * 100)
    }
  }, [obstaclesLeft]);

    //Start second obstacle
    useEffect(() => {
      if (obstaclesLeft > -60) {
        obstaclesTimerIdTwo = setInterval(() => {
          setObstaclesLeftTwo(obstaclesLeftTwo => obstaclesLeftTwo - 5)
        }, 30)
        return () => {
          clearInterval(obstaclesTimerIdTwo)
        }
      } else {
   
        obstaclesLeftTwo(screenWidth)
        setObstaclesNegHeightTwo( - Math.random() * 100)
      }
    }, [obstaclesLeftTwo]);


  return (
   <View style={styles.container}>
    <Bird
      birdBottom={birdBottom}
      birdLeft={birdLeft}
    />

    <Obstacle
    color={'green'}
    obstacleWidth = {obstacleWidth}
    obstacleHeight = {obstacleHeight}
    randomBottom = {obstaclesNegHeight}
    gap = {gap}
    obstaclesLeft = {obstaclesLeft}
    />

       <Obstacle
    color={'yellow'}
    obstacleWidth = {obstacleWidth}
    obstacleHeight = {obstacleHeight}
    randomBottom = {obstaclesNegHeightTwo}
    gap = {gap}
    obstaclesLeft = {obstaclesLeftTwo}

    />
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
