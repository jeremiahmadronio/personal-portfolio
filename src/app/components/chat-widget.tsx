"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, ArrowDown } from "lucide-react" 
import { motion, AnimatePresence } from "framer-motion"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [showScrollButton, setShowScrollButton] = useState(false) 


  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('jeremiah_chat_session') 
      if (saved) {
        try {
          return JSON.parse(saved).map((msg: any) => ({
            ...msg,
            timestamp: new Date(msg.timestamp)
          }))
        } catch (error) {
          console.error("Error parsing chat history", error)
        }
      }
    }
   
    return [
   {
  id: "1",
  text: "Hey there! 👋 I'm Jeremiah's AI assistant. Ask me anything about his skills, projects, or experience as a backend developer!",
  sender: "bot",
  timestamp: new Date(),
}
    ]
  })

  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  
 
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null) 


  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
      }, 0)
    }
  }


  const handleScroll = () => {
    if (chatContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current

      const isNotAtBottom = scrollHeight - (scrollTop + clientHeight) > 50
      setShowScrollButton(isNotAtBottom)
    }
  }


  useEffect(() => {
    if (messages.length > 0) {
      sessionStorage.setItem('jeremiah_chat_session', JSON.stringify(messages))
    }
    scrollToBottom()
  }, [messages])


  useEffect(() => {
    if (isOpen) {

      setTimeout(() => {
        scrollToBottom()
      }, 100)
    }
  }, [isOpen])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    // Send message to email notification API
    try {
      await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: inputValue, isInitial: false }),
      })
    } catch (error) {
      console.error("Failed to send chat notification:", error)
    }

    // Get AI response
    try {
      const aiResponse = await fetch("/api/ai-api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: inputValue }),
      })

      const data = await aiResponse.json()
      const botReply = data.reply || "Sorry, I couldn't process that. Please try again."

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botReply,
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error("Failed to get AI response:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I'm having trouble connecting right now. Please try again later.",
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-10 right-10 md:bottom-10 md:right-10 z-50 p-4 rounded-full bg-cyan-800 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-28 right-4 sm:bottom-32 sm:right-8 md:bottom-36 md:right-10 z-40 w-[calc(100vw-32px)] sm:w-96 max-w-md h-[500px] sm:h-[500px] rounded-2xl bg-white dark:bg-[#032b38] border border-gray-200 dark:border-cyan-500/30 shadow-2xl dark:shadow-cyan-500/10 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-600 dark:from-cyan-600 dark:via-cyan-500 dark:to-teal-600 p-4 text-white shadow-lg flex-shrink-0">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
  <h3 className="font-bold text-lg">Hi there! 👋</h3>
  <p className="text-sm text-cyan-50 dark:text-cyan-100">
    Want to know about Jeremiah's skills or projects? Just ask!
  </p>
</div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 dark:hover:bg-white/10 rounded-lg transition-all duration-200 flex-shrink-0 mt-1"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages Container */}
            <div 
                ref={chatContainerRef} // Attached ref for scrolling
                onScroll={handleScroll} // Listen to scroll events
                className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-[#01161d] relative"
            >
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      message.sender === "user"
                        ? "bg-cyan-600 text-white rounded-br-none"
                        : "bg-white dark:bg-[#054052] text-gray-900 dark:text-white border border-gray-200 dark:border-cyan-500/20 rounded-bl-none"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-[#054052] text-gray-900 dark:text-white border border-gray-200 dark:border-cyan-500/20 px-4 py-2 rounded-lg rounded-bl-none">
                    <div className="flex gap-2">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.1s]" />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                    </div>
                  </div>
                </div>
              )}
              
              {/* Invisible element to mark the bottom */}
              <div ref={messagesEndRef} />

              {/* 👇 SCROLL DOWN BUTTON (Like Messenger - Sticky) */}
              <AnimatePresence>
                {showScrollButton && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    onClick={scrollToBottom}
                    className="sticky bottom-0 left-1/2 transform -translate-x-1/2 mb-2 p-2.5 bg-cyan-600 dark:bg-cyan-500 hover:bg-cyan-700 dark:hover:bg-cyan-600 text-white rounded-full shadow-lg transition-all duration-200 z-20 flex items-center justify-center"
                  >
                    <ArrowDown className="w-4 h-4" />
                  </motion.button>
                )}
              </AnimatePresence>

            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="border-t border-gray-200 dark:border-cyan-500/20 p-4 bg-white dark:bg-[#032b38]">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-200 dark:border-cyan-500/30 bg-gray-50 dark:bg-[#054052] text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-cyan-200/50 focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-sm"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !inputValue.trim()}
                  className="p-2 rounded-lg bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}