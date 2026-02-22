import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, TextInput, Switch, KeyboardAvoidingView, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Journal({ onNavigate }) {
    const [reflection, setReflection] = useState('');
    const [actionStep, setActionStep] = useState('');
    const [trackOutcome, setTrackOutcome] = useState(false);

    return (
        <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                className="flex-1"
            >
                {/* Header */}
                <View className="flex-row items-center justify-between p-4 bg-background-light/95 dark:bg-background-dark/95 border-b border-slate-200 dark:border-white/5 z-50">
                    <TouchableOpacity onPress={() => onNavigate('Dashboard')} className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-surface-dark">
                        <MaterialIcons name="arrow-back-ios-new" size={20} className="text-slate-500 dark:text-slate-400" />
                    </TouchableOpacity>
                    <Text className="text-lg font-semibold tracking-wide text-slate-900 dark:text-white">Reflection</Text>
                    <TouchableOpacity className="flex items-center justify-center px-4 py-2">
                        <Text className="text-sm font-bold text-primary dark:text-primary-light">Save</Text>
                    </TouchableOpacity>
                </View>

                {/* Progress Indicator */}
                <View className="flex-row items-center justify-center gap-2 px-6 py-3">
                    <View className="h-1.5 w-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                    <View className="h-1.5 w-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                    <View className="h-1.5 w-8 rounded-full bg-primary shadow-sm shadow-primary/50" />
                </View>

                <ScrollView className="flex-1 px-5 pt-2" contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
                    {/* Headline */}
                    <View className="mb-8">
                        <Text className="text-3xl font-bold leading-tight mb-2 tracking-tight text-slate-900 dark:text-white">Internalize the Message</Text>
                        <Text className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Let the cards settle. What does your intuition say?</Text>
                    </View>

                    {/* Prompts Section */}
                    <View className="flex-col gap-4 mb-10">
                        <View className="flex-row items-center justify-between">
                            <View className="flex-row items-center gap-2">
                                <MaterialIcons name="auto-awesome" size={18} className="text-primary dark:text-primary-light" color="#5b13ec" />
                                <Text className="text-primary dark:text-primary-light text-xs font-bold uppercase tracking-wider">Journal Prompt</Text>
                            </View>
                            <TouchableOpacity className="flex-row items-center gap-1.5 bg-slate-100 dark:bg-white/5 px-2 py-1 rounded-lg">
                                <MaterialIcons name="shuffle" size={16} className="text-slate-500 dark:text-slate-400" />
                                <Text className="text-slate-500 dark:text-slate-400 text-xs font-medium">Shuffle</Text>
                            </TouchableOpacity>
                        </View>

                        <View className="flex-col gap-3">
                            <Text className="text-xl font-medium leading-snug text-slate-900 dark:text-white">How does this card's energy manifest in your current situation?</Text>
                            <View className="relative">
                                <TextInput
                                    className="w-full min-h-[160px] bg-white dark:bg-[#261f36] border border-slate-200 dark:border-transparent rounded-xl p-5 text-base leading-relaxed text-slate-800 dark:text-slate-100 shadow-sm"
                                    placeholder="Start typing your thoughts here..."
                                    placeholderTextColor="#94a3b8"
                                    multiline
                                    textAlignVertical="top"
                                    value={reflection}
                                    onChangeText={setReflection}
                                />
                                {reflection.length > 0 && (
                                    <View className="absolute bottom-3 right-3">
                                        <Text className="text-primary dark:text-primary-light text-xs font-medium">Drafting...</Text>
                                    </View>
                                )}
                            </View>
                        </View>
                    </View>

                    {/* Action Step Card */}
                    <View className="mb-8 relative">
                        <View className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-primary/30 rounded-2xl p-6 shadow-sm">
                            <View className="flex-row items-center gap-3 mb-4">
                                <View className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary flex items-center justify-center shadow-sm shadow-primary/30">
                                    <MaterialIcons name="flag" size={20} className="text-primary dark:text-white" color={undefined} />
                                </View>
                                <Text className="text-lg font-bold text-slate-900 dark:text-white">Today's Action</Text>
                            </View>
                            <Text className="mb-2 text-sm text-slate-500 dark:text-slate-400 font-medium">Commit to one small step</Text>

                            <View className="flex-row items-center gap-2 bg-slate-50 dark:bg-[#130d1d] rounded-xl p-3 border border-slate-200 dark:border-white/5">
                                <Text className="text-primary font-bold text-sm sm:text-base">Today I will...</Text>
                                <TextInput
                                    className="flex-1 text-slate-800 dark:text-white text-sm sm:text-base font-medium p-0"
                                    placeholder="take a 10 min walk"
                                    placeholderTextColor="#94a3b8"
                                    value={actionStep}
                                    onChangeText={setActionStep}
                                />
                            </View>
                        </View>
                    </View>

                    {/* Outcome Tracking Toggle */}
                    <View className="mb-8">
                        <View className="bg-white dark:bg-surface-input rounded-xl p-4 flex-row items-center justify-between shadow-sm border border-slate-200 dark:border-white/5">
                            <View className="flex-row gap-4 items-center">
                                <View className="w-10 h-10 rounded-full bg-slate-100 dark:bg-surface-dark flex items-center justify-center">
                                    <MaterialIcons name="track-changes" size={20} className="text-slate-500 dark:text-slate-400" />
                                </View>
                                <View className="flex-col">
                                    <Text className="font-semibold text-sm text-slate-900 dark:text-white">Track Outcome</Text>
                                    <Text className="text-xs text-slate-500 dark:text-slate-400">Remind me to reflect in 24h</Text>
                                </View>
                            </View>
                            <Switch
                                value={trackOutcome}
                                onValueChange={setTrackOutcome}
                                trackColor={{ false: '#cbd5e1', true: '#5b13ec' }}
                                thumbColor={Platform.OS === 'ios' ? '#ffffff' : trackOutcome ? '#ffffff' : '#f8fafc'}
                                ios_backgroundColor="#cbd5e1"
                            />
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

            {/* Bottom Navigation */}
            <View className="absolute bottom-0 left-0 right-0 z-30 border-t border-slate-200 dark:border-slate-800 bg-background-light dark:bg-surface-dark pb-6">
                <View className="flex-row h-16 items-center justify-around px-2">
                    <TouchableOpacity onPress={() => onNavigate('Dashboard')} className="flex-1 flex-col items-center justify-center gap-1">
                        <MaterialIcons name="home" size={24} color="#64748b" />
                        <Text className="text-[10px] font-medium text-slate-500 dark:text-slate-400">Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onNavigate('Journal')} className="flex-1 flex-col items-center justify-center gap-1">
                        <MaterialIcons name="menu-book" size={24} color="#5b13ec" className="text-primary dark:text-white" />
                        <Text className="text-[10px] font-medium text-primary dark:text-white">Journal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onNavigate('Deck')} className="flex-1 flex-col items-center justify-center gap-1">
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
