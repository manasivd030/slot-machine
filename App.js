import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView, View, Text, Pressable, Image, Alert, useWindowDimensions } from "react-native";
import tw from "twrnc";

// local assets
const ASSETS = [
  require("./assets/a1.png"),
  require("./assets/a2.png"),
  require("./assets/a3.png"),
  require("./assets/a4.png"),
  require("./assets/a5.png"),
];

const MULTIPLIER = [3, 4, 5, 6, 10];
const REEL_SPIN_MS = 900;
const TICK_MS = 100;
const START_BALANCE = 100;

export default function App() {
  const [grid, setGrid] = useState(makeInitialGrid());
  const [balance, setBalance] = useState(START_BALANCE);
  const [bet, setBet] = useState(5);
  const [spinning, setSpinning] = useState(false);
  const [lastWin, setLastWin] = useState(0);

  const reelTimers = useRef([null, null, null]);
  const stopTimers = useRef([null, null, null]);

  // ---- NEW: stable width/height for the reel on Android
  const { width: screenW } = useWindowDimensions();
  const outerPadding = 32; // matches px-4 on both sides
  const boardW = Math.min(screenW - outerPadding, 420);
  const boardH = Math.round(boardW * 2 / 3); // 3:2 area (tall enough on Android)

  useEffect(() => cleanupTimers, []);
  function cleanupTimers() {
    reelTimers.current.forEach((t) => t && clearInterval(t));
    stopTimers.current.forEach((t) => t && clearTimeout(t));
  }

  function makeInitialGrid() {
    return Array.from({ length: 3 }, () =>
      Array.from({ length: 3 }, () => randomIndex())
    );
  }
  function randomIndex() { return Math.floor(Math.random() * ASSETS.length); }
  function shiftColumn(col) { return [randomIndex(), col[0], col[1]]; }

  function spin() {
    if (spinning) return;
    if (bet <= 0) return Alert.alert("Bet required", "Increase your bet to spin.");
    if (balance < bet) return Alert.alert("Insufficient balance", "Lower your bet.");

    setBalance(b => b - bet);
    setLastWin(0);
    setSpinning(true);

    [0,1,2].forEach(col => {
      reelTimers.current[col] = setInterval(() => {
        setGrid(g => g.map((c, i) => (i === col ? shiftColumn(c) : c)));
      }, TICK_MS);

      stopTimers.current[col] = setTimeout(() => {
        clearInterval(reelTimers.current[col]);
        reelTimers.current[col] = null;

        if (col === 2) {
          setTimeout(() => {
            const win = evaluateWin();
            setLastWin(win);
            if (win > 0) setBalance(b => b + win);
            setSpinning(false);
          }, 150);
        }
      }, REEL_SPIN_MS + col * 350);
    });
  }

  function evaluateWin() {
    const [s1, s2, s3] = [grid[0][1], grid[1][1], grid[2][1]];
    if (s1 === s2 && s2 === s3) return bet * MULTIPLIER[s1];
    if (s1 === s2 || s2 === s3 || s1 === s3) return Math.round(bet * 1.5);
    return 0;
  }

  function changeBet(d) { if (!spinning) setBet(b => Math.max(1, Math.min(50, b + d))); }
  function resetGame() {
    cleanupTimers();
    setGrid(makeInitialGrid());
    setBalance(START_BALANCE);
    setBet(5);
    setLastWin(0);
    setSpinning(false);
  }

  const SymbolImage = ({ index, size = 52 }) => (
    <Image source={ASSETS[index]} style={{ width: size, height: size }} resizeMode="contain" />
  );

  return (
    <SafeAreaView style={tw`flex-1 bg-slate-900`}>
      <View style={tw`px-4 pt-4 pb-2`}>
        <Text style={tw`text-white text-2xl font-bold`}>🎰 Local Slots</Text>
        <Text style={tw`text-slate-300`}>Android fix: explicit reel size.</Text>
      </View>

      {/* Asset check */}
      <View style={tw`px-4`}>
        <Text style={tw`text-slate-300 mb-2`}>Asset check:</Text>
        <View style={tw`flex-row items-center gap-3`}>
          {[0,1,2,3,4].map(i => (
            <View key={i} style={tw`w-14 h-14 bg-slate-800 items-center justify-center rounded-lg`}>
              <SymbolImage index={i} size={40} />
            </View>
          ))}
        </View>
      </View>

      {/* Stats */}
      <View style={tw`flex-row items-center justify-between px-4 mt-3`}>
        <Text style={tw`text-white text-lg`}>Balance: <Text style={tw`font-bold`}>{balance}</Text> 🪙</Text>
        <Text style={tw`text-white text-lg`}>Last win: <Text style={tw`font-bold`}>{lastWin}</Text></Text>
      </View>

      {/* Bet controls */}
      <View style={tw`flex-row items-center justify-center gap-3 px-4 mt-3`}>
        <Pressable onPress={() => changeBet(-1)} disabled={spinning} style={tw`px-3 py-2 rounded-lg bg-slate-800 border border-slate-700`}>
          <Text style={tw`text-white text-xl`}>−</Text>
        </Pressable>
        <Text style={tw`text-white text-lg mx-2`}>Bet: <Text style={tw`font-bold`}>{bet}</Text></Text>
        <Pressable onPress={() => changeBet(1)} disabled={spinning} style={tw`px-3 py-2 rounded-lg bg-slate-800 border border-slate-700`}>
          <Text style={tw`text-white text-xl`}>+</Text>
        </Pressable>
      </View>

      {/* Reels (explicit width/height) */}
      <View style={tw`flex-1 items-center justify-center px-4`}>
        <View
          style={[
            { width: boardW, height: boardH },
            tw`rounded-2xl bg-slate-800 border-2 border-emerald-400 overflow-hidden`
          ]}
        >
          <View style={tw`flex-1 flex-row`}>
            {[0,1,2].map(col => (
              <View key={col} style={tw`flex-1`}>
                {[0,1,2].map(row => (
                  <View
                    key={`${col}-${row}`}
                    style={[
                      tw`flex-1 items-center justify-center border border-slate-700`,
                      row === 1 ? tw`bg-slate-700` : null
                    ]}
                  >
                    <SymbolImage index={grid[col][row]} />
                  </View>
                ))}
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Controls */}
      <View style={tw`px-4 pb-6 flex-row justify-center gap-4`}>
        <Pressable onPress={resetGame} disabled={spinning} style={tw`px-4 py-3 rounded-xl bg-slate-800 border border-slate-700`}>
          <Text style={tw`text-white text-base`}>Reset</Text>
        </Pressable>
        <Pressable
          onPress={spin}
          disabled={spinning}
          style={tw.style(`px-6 py-3 rounded-xl`, spinning ? `bg-emerald-600/60` : `bg-emerald-600`, `shadow`)}
        >
          <Text style={tw`text-white text-lg font-bold`}>{spinning ? "Spinning..." : "SPIN"}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
