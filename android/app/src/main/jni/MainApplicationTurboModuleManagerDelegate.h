#include <memory>
#include <string>

#include <ReactCommon/TurboModuleManagerDelegate.h>
#include <fbjni/fbjni.h>

namespace facebook {
namespace react {

class MainApplicationTurboModuleManagerDelegate
    : public jni::HybridClass<
          MainApplicationTurboModuleManagerDelegate,
          TurboModuleManagerDelegate> {
 public:
  // Adapt it to the package you used for your Java class.
  static constexpr auto kJavaDescriptor =
      "Lcom/carrito/newarchitecture/modules/MainApplicationTurboModuleManagerDelegate;";

  static jni::local_ref<jhybriddata> initHybrid(jni::alias_ref<jhybridobject>);

  static void registerNatives();

  std::shared_ptr<TurboModule> getTurboModule(
      const std::string &name,
      const std::shared_ptr<CallInvoker> &jsInvoker) over ride;
  std::shared_ptr<TurboModule> getTurboModule(
      const std::string &name,
      const JavaTurboModule::InitParams &params) over ride;

  /**
   * Test-only method. Allows user to ver ify whether a TurboModule can be
   * created by instances of this class.
   */
  bool canCreateTurboModule(const std::string &name);
};

} // namespace react
} // namespace facebook
