import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import tarotCards from '../data/tarotCards.json';
import { TarotCardImages } from '../../assets/cards/index';

export default function Deck({ onNavigate }) {
    // Get some sample cards for top repeating
    const topCards = [
        { card: tarotCards.find(c => c.name === "The Fool") || tarotCards[0], count: 4 },
        { card: tarotCards.find(c => c.name === "Ace of Cups") || tarotCards[1], count: 3 },
        { card: tarotCards.find(c => c.name === "The Moon") || tarotCards[2], count: 2 },
    ];

    return (
        <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
            <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 100 }}>
                {/* Header */}
                <View className="pt-6 pb-4 px-6 border-b border-slate-200 dark:border-white/5">
                    <View className="flex-row items-center justify-between mb-1">
                        <Text className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Your Insights</Text>
                        <TouchableOpacity className="flex-row items-center gap-1 bg-white dark:bg-white/5 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10">
                            <Text className="text-sm font-medium text-slate-600 dark:text-slate-300">Last 30 Days</Text>
                            <MaterialIcons name="keyboard-arrow-down" size={18} className="text-slate-500 dark:text-slate-400" />
                        </TouchableOpacity>
                    </View>
                    <Text className="text-slate-500 dark:text-slate-400 text-sm">Discover patterns in your intuition</Text>
                </View>

                {/* Top Repeating Cards */}
                <View className="mt-6">
                    <View className="flex-row items-center justify-between px-6 mb-4">
                        <View className="flex-row items-center gap-2">
                            <MaterialIcons name="style" size={20} className="text-primary dark:text-primary-light" color="#5b13ec" />
                            <Text className="text-lg font-semibold text-slate-900 dark:text-white">Top Repeating Cards</Text>
                        </View>
                        <TouchableOpacity>
                            <Text className="text-xs text-primary dark:text-primary-light font-medium">View All</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20 }} className="flex-row gap-4">
                        {topCards.map((item, index) => (
                            <View key={index} className="mr-4 flex-col gap-2 w-[120px]">
                                <View className="relative w-full aspect-[2/3] rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-white/10 dark:bg-black">
                                    {item.card && TarotCardImages[item.card.name] ? (
                                        <Image source={TarotCardImages[item.card.name]} className="absolute inset-0 w-full h-full" resizeMode="cover" />
                                    ) : (
                                        <View className="absolute inset-0 w-full h-full bg-slate-800" />
                                    )}
                                    <View className="absolute inset-0 bg-black/40" />
                                    <View className="absolute top-2 right-2 bg-primary px-2 py-0.5 rounded-full">
                                        <Text className="text-white text-[10px] font-bold">{item.count}x</Text>
                                    </View>
                                    <View className="absolute bottom-3 left-3 right-3">
                                        <Text className="text-white text-xs font-medium leading-tight">{item.card?.name}</Text>
                                        <Text className="text-slate-300 text-[10px] leading-tight mt-0.5">Tarot Card</Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                {/* Weekly Energy Summary (AI) */}
                <View className="px-6 mt-8">
                    <View className="relative overflow-hidden rounded-2xl bg-white dark:bg-[#1f1830] border border-slate-200 dark:border-primary/20 p-5 shadow-sm">
                        <View className="flex-row items-center gap-2 mb-3">
                            <View className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white">
                                <MaterialIcons name="auto-awesome" size={14} color="#fff" />
                            </View>
                            <Text className="text-sm font-semibold text-slate-900 dark:text-white tracking-wide uppercase">Weekly Energy</Text>
                        </View>
                        <Text className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            Your cards suggest a focus on <Text className="text-yellow-600 dark:text-[#FFD700] font-medium">new beginnings</Text> this week. The high frequency of Cups indicates deep emotional processing, while The Fool appearing repeatedly signals it's time to take a leap of faith in your career sector.
                        </Text>
                    </View>
                </View>

                {/* Daily Practice (Simplified Bar Chart) */}
                <View className="mt-8 px-6">
                    <View className="flex-row items-center justify-between mb-4">
                        <View className="flex-row items-center gap-2">
                            <MaterialIcons name="insights" size={20} className="text-primary dark:text-primary-light" color="#5b13ec" />
                            <Text className="text-lg font-semibold text-slate-900 dark:text-white">Daily Practice</Text>
                        </View>
                    </View>
                    <View className="bg-white dark:bg-[#1f1830] rounded-2xl p-5 border border-slate-200 dark:border-white/5">
                        <View className="flex-row justify-between items-end h-32 w-full gap-2 relative">
                            {/* Bars */}
                            {[40, 70, 30, 80, 50, 90, 60].map((val, i) => (
                                <View key={i} className="flex-1 flex-col justify-end items-center h-full">
                                    <View className="w-full bg-yellow-400 dark:bg-[#FFD700] rounded-t-sm opacity-80" style={{ height: `${val}%` }} />
                                </View>
                            ))}
                        </View>
                        {/* Labels */}
                        <View className="flex-row justify-between mt-3">
                            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                                <Text key={day} className="text-[10px] text-slate-500 font-medium flex-1 text-center">{day}</Text>
                            ))}
                        </View>
                    </View>
                </View>

                {/* Life Themes Chart */}
                <View className="mt-8 px-6 pb-6">
                    <View className="flex-row items-center justify-between mb-4">
                        <View className="flex-row items-center gap-2">
                            <MaterialIcons name="donut-small" size={20} className="text-primary dark:text-primary-light" color="#5b13ec" />
                            <Text className="text-lg font-semibold text-slate-900 dark:text-white">Life Themes</Text>
                        </View>
                    </View>
                    <View className="bg-white dark:bg-[#1f1830] rounded-2xl p-5 border border-slate-200 dark:border-white/5 flex-col gap-4">

                        {/* Theme 1 */}
                        <View className="flex-col gap-1">
                            <View className="flex-row justify-between items-end mb-1">
                                <Text className="text-sm font-medium text-slate-700 dark:text-slate-200">Personal Growth</Text>
                                <Text className="text-xs font-bold text-primary dark:text-primary-light">45%</Text>
                            </View>
                            <View className="w-full h-2 bg-slate-100 dark:bg-slate-700/30 rounded-full overflow-hidden">
                                <View className="h-full bg-primary rounded-full" style={{ width: '45%' }} />
                            </View>
                        </View>

                        {/* Theme 2 */}
                        <View className="flex-col gap-1">
                            <View className="flex-row justify-between items-end mb-1">
                                <Text className="text-sm font-medium text-slate-700 dark:text-slate-200">Career & Work</Text>
                                <Text className="text-xs font-bold text-yellow-600 dark:text-[#FFD700]">30%</Text>
                            </View>
                            <View className="w-full h-2 bg-slate-100 dark:bg-slate-700/30 rounded-full overflow-hidden">
                                <View className="h-full bg-yellow-500 dark:bg-[#FFD700] rounded-full" style={{ width: '30%' }} />
                            </View>
                        </View>

                        {/* Theme 3 */}
                        <View className="flex-col gap-1">
                            <View className="flex-row justify-between items-end mb-1">
                                <Text className="text-sm font-medium text-slate-700 dark:text-slate-200">Love & Relationships</Text>
                                <Text className="text-xs font-bold text-pink-500">25%</Text>
                            </View>
                            <View className="w-full h-2 bg-slate-100 dark:bg-slate-700/30 rounded-full overflow-hidden">
                                <View className="h-full bg-pink-500 rounded-full" style={{ width: '25%' }} />
                            </View>
                        </View>

                    </View>
                </View>

            </ScrollView>

            {/* Bottom Navigation */}
            <View className="absolute bottom-0 left-0 right-0 z-30 border-t border-slate-200 dark:border-slate-800 bg-background-light dark:bg-surface-dark pb-6">
                <View className="flex-row h-16 items-center justify-around px-2">
                    <TouchableOpacity onPress={() => onNavigate('Dashboard')} className="flex-1 flex-col items-center justify-center gap-1">
                        <MaterialIcons name="home" size={24} color="#64748b" />
                        <Text className="text-[10px] font-medium text-slate-500 dark:text-slate-400">Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 flex-col items-center justify-center gap-1">
                        <MaterialIcons name="menu-book" size={24} color="#64748b" />
                        <Text className="text-[10px] font-medium text-slate-500 dark:text-slate-400">Journal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onNavigate('Deck')} className="flex-1 flex-col items-center justify-center gap-1">
                        <MaterialIcons name="style" size={24} color="#5b13ec" className="text-primary dark:text-white" />
                        <Text className="text-[10px] font-medium text-primary dark:text-white">Deck</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 flex-col items-center justify-center gap-1">
                        <MaterialIcons name="bar-chart" size={24} color="#64748b" />
                        <Text className="text-[10px] font-medium text-slate-500 dark:text-slate-400">Stats</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
