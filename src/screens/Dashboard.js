import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ImageBackground, SafeAreaView, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import tarotCards from '../data/tarotCards.json';
import { TarotCardImages } from '../../assets/cards/index';

export default function Dashboard({ onNavigate }) {
    const [dailyCard, setDailyCard] = useState(null);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * tarotCards.length);
        setDailyCard(tarotCards[randomIndex]);
    }, []);
    return (
        <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
            <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 100 }}>
                {/* Header */}
                <View className="flex-row items-center justify-between px-5 pt-4 pb-2">
                    <View className="flex-row items-center gap-2">
                        <MaterialIcons name="auto-awesome" size={28} className="text-primary dark:text-primary-light" color="#5b13ec" />
                        <View className="flex-col">
                            <Text className="text-xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">Tarotins</Text>
                            <Text className="text-[10px] font-medium text-primary dark:text-primary-light tracking-widest uppercase">Tarot Insights</Text>
                        </View>
                    </View>
                    <TouchableOpacity className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 dark:bg-surface-dark transition-colors">
                        <MaterialIcons name="settings" size={24} color="#64748b" className="text-slate-600 dark:text-slate-400" />
                    </TouchableOpacity>
                </View>

                {/* Greeting */}
                <View className="px-5 pt-2 pb-6">
                    <Text className="text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
                        Good Evening, <Text className="text-primary dark:text-primary-light">Seeker</Text>
                    </Text>
                    <Text className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
                        Waxing Crescent • 14% Illumination
                    </Text>
                </View>

                {/* Hero: Daily Ritual */}
                <View className="px-5 mb-8">
                    <View className="relative overflow-hidden rounded-2xl bg-surface-dark shadow-xl">
                        {/* Background Gradient/Image */}
                        <ImageBackground
                            source={{ uri: 'https://images.unsplash.com/photo-1633519782502-3f7b53106144?q=80&w=2000&auto=format&fit=crop' }}
                            className="absolute inset-0 opacity-40 mix-blend-overlay"
                            resizeMode="cover"
                        />
                        <View className="absolute inset-0 bg-primary/30" />

                        <View className="relative z-10 flex-col gap-6 p-6">
                            <View className="flex-row justify-between items-start">
                                <View className="flex-col gap-1 flex-1 pr-4">
                                    <View className="rounded-full bg-primary/20 px-2.5 py-0.5 border border-primary/30 w-fit self-start">
                                        <Text className="text-xs font-medium text-primary-light">Daily Ritual</Text>
                                    </View>
                                    <Text className="text-2xl font-bold text-white mt-2">Card of the Day</Text>
                                    <Text className="text-slate-300 text-sm max-w-[240px]" numberOfLines={3}>
                                        {dailyCard ? `You drew ${dailyCard.name}. ${dailyCard.keywords}` : "Connect with your intuition. What message does the universe have for you?"}
                                    </Text>
                                </View>

                                {/* Stylized Card Image */}
                                {dailyCard && TarotCardImages[dailyCard.name] ? (
                                    <View className="h-28 w-20 rounded shadow-lg" style={{ transform: [{ rotate: '6deg' }] }}>
                                        <Image source={TarotCardImages[dailyCard.name]} className="h-full w-full rounded" resizeMode="cover" />
                                    </View>
                                ) : (
                                    <View className="h-16 w-12 rounded bg-slate-700 border border-slate-500/30 shadow-lg flex items-center justify-center" style={{ transform: [{ rotate: '6deg' }] }}>
                                        <MaterialIcons name="visibility" size={24} color="rgba(148, 163, 184, 0.5)" />
                                    </View>
                                )}
                            </View>

                            <TouchableOpacity className="flex-row w-full items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-light py-3.5 shadow-lg shadow-primary/20">
                                <MaterialIcons name="layers" size={20} color="white" />
                                <Text className="text-sm font-semibold text-white">Begin Reading</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Quick Insights Section */}
                <View className="mb-8">
                    <View className="flex-row items-center justify-between px-5 mb-4">
                        <Text className="text-lg font-bold text-slate-900 dark:text-white">Quick Insights</Text>
                        <TouchableOpacity>
                            <Text className="text-xs font-semibold text-primary dark:text-primary-light">View All</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Horizontal Scroll Container */}
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20 }} className="flex-row gap-4">
                        {/* Card 1: Pattern */}
                        <View className="mr-4 w-60 rounded-xl bg-white dark:bg-surface-dark p-4 shadow-sm ring-1 ring-slate-200 dark:ring-white/5 border border-slate-200 dark:border-slate-800">
                            <View className="flex-row items-center gap-3 mb-3">
                                <View className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10">
                                    <MaterialIcons name="repeat" size={20} color="#818cf8" />
                                </View>
                                <View>
                                    <Text className="text-xs font-medium text-slate-500 dark:text-slate-400">Recurring Card</Text>
                                    <Text className="font-bold text-slate-900 dark:text-white">The High Priestess</Text>
                                </View>
                            </View>
                            <Text className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                                Appeared <Text className="text-primary-light font-bold">3 times</Text> this week. Trust your inner voice and intuition.
                            </Text>
                        </View>

                        {/* Card 2: Suit Dominance */}
                        <View className="mr-4 w-60 rounded-xl bg-white dark:bg-surface-dark p-4 shadow-sm ring-1 ring-slate-200 dark:ring-white/5 border border-slate-200 dark:border-slate-800">
                            <View className="flex-row items-center gap-3 mb-3">
                                <View className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
                                    <MaterialIcons name="filter-drama" size={20} color="#34d399" />
                                </View>
                                <View>
                                    <Text className="text-xs font-medium text-slate-500 dark:text-slate-400">Dominant Suit</Text>
                                    <Text className="font-bold text-slate-900 dark:text-white">Cups (Water)</Text>
                                </View>
                            </View>
                            <Text className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                                Emotions are flowing freely. Focus on relationships and healing.
                            </Text>
                        </View>

                        {/* Card 3: Streak */}
                        <View className="w-60 rounded-xl bg-white dark:bg-surface-dark p-4 shadow-sm ring-1 ring-slate-200 dark:ring-white/5 border border-slate-200 dark:border-slate-800">
                            <View className="flex-row items-center gap-3 mb-3">
                                <View className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10">
                                    <MaterialIcons name="local-fire-department" size={20} color="#fb923c" />
                                </View>
                                <View>
                                    <Text className="text-xs font-medium text-slate-500 dark:text-slate-400">Current Streak</Text>
                                    <Text className="font-bold text-slate-900 dark:text-white">5 Days</Text>
                                </View>
                            </View>
                            <Text className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                                Consistency is key. You're building a powerful habit.
                            </Text>
                        </View>
                    </ScrollView>
                </View>

                {/* Recent Entries */}
                <View className="px-5">
                    <Text className="text-lg font-bold text-slate-900 dark:text-white mb-4">Recent Entries</Text>
                    <View className="flex-col gap-3">
                        {/* Entry Item 1 */}
                        <View className="flex-col gap-3 rounded-xl bg-white dark:bg-surface-dark p-4 shadow-sm border border-slate-200 dark:border-slate-800">
                            <View className="flex-row justify-between items-center border-b border-slate-100 dark:border-white/5 pb-3">
                                <View className="flex-row items-center gap-2">
                                    <Text className="text-xs font-bold text-primary dark:text-primary-light uppercase tracking-wider">Today</Text>
                                    <Text className="text-xs text-slate-400">• 8:42 AM</Text>
                                </View>
                                <View className="bg-slate-100 dark:bg-white/10 px-2 py-0.5 rounded">
                                    <Text className="text-xs text-slate-500 dark:text-slate-300">Celtic Cross</Text>
                                </View>
                            </View>
                            <View className="flex-row gap-2 py-1">
                                <View className="h-8 w-6 rounded bg-slate-300 dark:bg-slate-700 border dark:border-white/10" />
                                <View className="h-8 w-6 rounded bg-slate-300 dark:bg-slate-700 border dark:border-white/10" />
                                <View className="h-8 w-6 rounded bg-slate-300 dark:bg-slate-700 border dark:border-white/10" />
                                <View className="h-8 w-6 flex items-center justify-center"><Text className="text-xs text-slate-400">+2</Text></View>
                            </View>
                            <View className="flex-row gap-3 items-start mt-1">
                                <MaterialIcons name="edit-note" size={18} color="#5b13ec" className="text-primary dark:text-primary-light mt-0.5" />
                                <Text className="text-sm text-slate-600 dark:text-slate-300 flex-1 leading-5" numberOfLines={2}>
                                    The Tower suggests sudden change is coming, but the Star offers hope. I need to focus on grounding myself...
                                </Text>
                            </View>
                        </View>

                        {/* Entry Item 2 */}
                        <View className="flex-col gap-3 rounded-xl bg-white dark:bg-surface-dark p-4 shadow-sm border border-slate-200 dark:border-slate-800">
                            <View className="flex-row justify-between items-center border-b border-slate-100 dark:border-white/5 pb-3">
                                <View className="flex-row items-center gap-2">
                                    <Text className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Yesterday</Text>
                                    <Text className="text-xs text-slate-400">• 9:15 PM</Text>
                                </View>
                                <View className="bg-slate-100 dark:bg-white/10 px-2 py-0.5 rounded">
                                    <Text className="text-xs text-slate-500 dark:text-slate-300">Single Pull</Text>
                                </View>
                            </View>
                            <View className="flex-row gap-2 py-1">
                                <View className="h-8 w-6 rounded bg-slate-300 dark:bg-slate-700 border dark:border-white/10" />
                            </View>
                            <View className="flex-row gap-3 items-start mt-1">
                                <MaterialIcons name="edit-note" size={18} color="#5b13ec" className="text-primary dark:text-primary-light mt-0.5" />
                                <Text className="text-sm text-slate-600 dark:text-slate-300 flex-1 leading-5" numberOfLines={2}>
                                    The Fool. A new beginning is on the horizon. Don't be afraid to take the leap of faith regarding the new project.
                                </Text>
                            </View>
                        </View>

                        {/* Entry Item 3 */}
                        <View className="flex-col gap-3 rounded-xl bg-white dark:bg-surface-dark p-4 shadow-sm border border-slate-200 dark:border-slate-800 opacity-75">
                            <View className="flex-row justify-between items-center border-b border-slate-100 dark:border-white/5 pb-3">
                                <View className="flex-row items-center gap-2">
                                    <Text className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Oct 24</Text>
                                    <Text className="text-xs text-slate-400">• 7:30 AM</Text>
                                </View>
                                <View className="bg-slate-100 dark:bg-white/10 px-2 py-0.5 rounded">
                                    <Text className="text-xs text-slate-500 dark:text-slate-300">3-Card Spread</Text>
                                </View>
                            </View>
                            <View className="flex-row gap-2 py-1">
                                <View className="h-8 w-6 rounded bg-slate-300 dark:bg-slate-700 border dark:border-white/10" />
                                <View className="h-8 w-6 rounded bg-slate-300 dark:bg-slate-700 border dark:border-white/10" />
                                <View className="h-8 w-6 rounded bg-slate-300 dark:bg-slate-700 border dark:border-white/10" />
                            </View>
                            <View className="flex-row gap-3 items-start mt-1">
                                <MaterialIcons name="edit-note" size={18} color="#5b13ec" className="text-primary dark:text-primary-light mt-0.5" />
                                <Text className="text-sm text-slate-600 dark:text-slate-300 flex-1 leading-5" numberOfLines={2}>
                                    Reflecting on the past month. The Moon indicates illusions.
                                </Text>
                            </View>
                        </View>

                    </View>
                </View>
            </ScrollView>

            {/* Bottom Navigation */}
            <View className="absolute bottom-0 left-0 right-0 z-30 border-t border-slate-200 dark:border-slate-800 bg-background-light dark:bg-surface-dark pb-6">
                <View className="flex-row h-16 items-center justify-around px-2">
                    <TouchableOpacity onPress={() => onNavigate && onNavigate('Dashboard')} className="flex-1 flex-col items-center justify-center gap-1">
                        <MaterialIcons name="home" size={24} color="#5b13ec" className="text-primary dark:text-white" />
                        <Text className="text-[10px] font-medium text-primary dark:text-white">Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 flex-col items-center justify-center gap-1">
                        <MaterialIcons name="menu-book" size={24} color="#64748b" />
                        <Text className="text-[10px] font-medium text-slate-500 dark:text-slate-400">Journal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onNavigate && onNavigate('Deck')} className="flex-1 flex-col items-center justify-center gap-1">
                        <MaterialIcons name="style" size={24} color="#64748b" />
                        <Text className="text-[10px] font-medium text-slate-500 dark:text-slate-400">Deck</Text>
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
